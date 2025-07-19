// 反思記錄管理系統
class ReflectionManager {
    constructor() {
        this.reflections = this.loadReflections();
        this.currentEditId = null;
        this.init();
    }

    // 初始化
    init() {
        this.setupEventListeners();
        this.renderReflections();
        this.setDefaultDate();
    }

    // 設定事件監聽器
    setupEventListeners() {
        // 表單提交
        document.getElementById('reflectionForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // 搜尋功能
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterReflections();
        });

        // 分類篩選
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.filterReflections();
        });

        // 模態框事件
        document.getElementById('confirmDelete').addEventListener('click', () => {
            this.deleteReflection();
        });

        document.getElementById('cancelDelete').addEventListener('click', () => {
            this.closeModal();
        });

        // 點擊模態框背景關閉
        document.getElementById('deleteModal').addEventListener('click', (e) => {
            if (e.target.id === 'deleteModal') {
                this.closeModal();
            }
        });
    }

    // 設定預設日期為今天
    setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').value = today;
    }

    // 處理表單提交
    handleFormSubmit() {
        const formData = new FormData(document.getElementById('reflectionForm'));
        const reflection = {
            id: this.currentEditId || Date.now().toString(),
            title: formData.get('title'),
            date: formData.get('date'),
            category: formData.get('category'),
            content: formData.get('content'),
            reflection: formData.get('reflection'),
            tags: formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag),
            createdAt: this.currentEditId ? this.getReflectionById(this.currentEditId)?.createdAt || new Date().toISOString() : new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        if (this.currentEditId) {
            this.updateReflection(reflection);
        } else {
            this.addReflection(reflection);
        }

        this.resetForm();
    }

    // 新增反思記錄
    addReflection(reflection) {
        this.reflections.unshift(reflection);
        this.saveReflections();
        this.renderReflections();
        this.showNotification('反思記錄已成功新增！', 'success');
    }

    // 更新反思記錄
    updateReflection(reflection) {
        const index = this.reflections.findIndex(r => r.id === reflection.id);
        if (index !== -1) {
            this.reflections[index] = reflection;
            this.saveReflections();
            this.renderReflections();
            this.showNotification('反思記錄已成功更新！', 'success');
        }
    }

    // 刪除反思記錄
    deleteReflection() {
        if (this.currentDeleteId) {
            this.reflections = this.reflections.filter(r => r.id !== this.currentDeleteId);
            this.saveReflections();
            this.renderReflections();
            this.showNotification('反思記錄已成功刪除！', 'success');
            this.closeModal();
        }
    }

    // 編輯反思記錄
    editReflection(id) {
        const reflection = this.getReflectionById(id);
        if (reflection) {
            this.currentEditId = id;
            this.fillForm(reflection);
            document.querySelector('.submit-btn').innerHTML = '<i class="fas fa-edit"></i> 更新反思';
            document.querySelector('.add-reflection h2').innerHTML = '<i class="fas fa-edit"></i> 編輯反思記錄';
            
            // 滾動到表單區域
            document.querySelector('.add-reflection').scrollIntoView({ behavior: 'smooth' });
        }
    }

    // 填寫表單
    fillForm(reflection) {
        document.getElementById('title').value = reflection.title;
        document.getElementById('date').value = reflection.date;
        document.getElementById('category').value = reflection.category;
        document.getElementById('content').value = reflection.content;
        document.getElementById('reflection').value = reflection.reflection;
        document.getElementById('tags').value = reflection.tags.join(', ');
    }

    // 重置表單
    resetForm() {
        document.getElementById('reflectionForm').reset();
        this.currentEditId = null;
        this.setDefaultDate();
        document.querySelector('.submit-btn').innerHTML = '<i class="fas fa-save"></i> 儲存反思';
        document.querySelector('.add-reflection h2').innerHTML = '<i class="fas fa-plus-circle"></i> 新增反思記錄';
    }

    // 渲染反思記錄
    renderReflections() {
        const container = document.getElementById('reflectionsContainer');
        const filteredReflections = this.getFilteredReflections();

        if (filteredReflections.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-book-open"></i>
                    <h3>還沒有反思記錄</h3>
                    <p>開始記錄您的學習歷程吧！</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredReflections.map(reflection => this.createReflectionCard(reflection)).join('');
    }

    // 建立反思記錄卡片
    createReflectionCard(reflection) {
        const formattedDate = new Date(reflection.date).toLocaleDateString('zh-TW');
        const tagsHtml = reflection.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        return `
            <div class="reflection-card" data-id="${reflection.id}">
                <div class="reflection-header">
                    <div>
                        <div class="reflection-title">${reflection.title}</div>
                        <div class="reflection-date">${formattedDate}</div>
                    </div>
                    <span class="reflection-category">${reflection.category}</span>
                </div>
                
                <div class="reflection-content">
                    <h4>學習內容：</h4>
                    <p>${this.formatText(reflection.content)}</p>
                    
                    <h4>反思與收穫：</h4>
                    <p>${this.formatText(reflection.reflection)}</p>
                </div>
                
                ${tagsHtml ? `<div class="reflection-tags">${tagsHtml}</div>` : ''}
                
                <div class="reflection-actions">
                    <button class="btn-edit" onclick="reflectionManager.editReflection('${reflection.id}')">
                        <i class="fas fa-edit"></i> 編輯
                    </button>
                    <button class="btn-delete" onclick="reflectionManager.showDeleteModal('${reflection.id}')">
                        <i class="fas fa-trash"></i> 刪除
                    </button>
                </div>
            </div>
        `;
    }

    // 格式化文字（處理換行）
    formatText(text) {
        return text.replace(/\n/g, '<br>');
    }

    // 篩選反思記錄
    filterReflections() {
        this.renderReflections();
    }

    // 取得篩選後的反思記錄
    getFilteredReflections() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const categoryFilter = document.getElementById('categoryFilter').value;

        return this.reflections.filter(reflection => {
            const matchesSearch = !searchTerm || 
                reflection.title.toLowerCase().includes(searchTerm) ||
                reflection.content.toLowerCase().includes(searchTerm) ||
                reflection.reflection.toLowerCase().includes(searchTerm) ||
                reflection.tags.some(tag => tag.toLowerCase().includes(searchTerm));

            const matchesCategory = !categoryFilter || reflection.category === categoryFilter;

            return matchesSearch && matchesCategory;
        });
    }

    // 顯示刪除確認模態框
    showDeleteModal(id) {
        this.currentDeleteId = id;
        document.getElementById('deleteModal').style.display = 'block';
    }

    // 關閉模態框
    closeModal() {
        document.getElementById('deleteModal').style.display = 'none';
        this.currentDeleteId = null;
    }

    // 取得反思記錄
    getReflectionById(id) {
        return this.reflections.find(r => r.id === id);
    }

    // 載入反思記錄
    loadReflections() {
        const saved = localStorage.getItem('reflections');
        return saved ? JSON.parse(saved) : [];
    }

    // 儲存反思記錄
    saveReflections() {
        localStorage.setItem('reflections', JSON.stringify(this.reflections));
    }

    // 顯示通知
    showNotification(message, type = 'info') {
        // 建立通知元素
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;

        // 設定樣式
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#48bb78' : '#4299e1'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1001;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            animation: slideIn 0.3s ease-out;
        `;

        // 加入動畫樣式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        // 加入頁面
        document.body.appendChild(notification);

        // 3秒後自動移除
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// 初始化反思管理器
const reflectionManager = new ReflectionManager();

// 全域函數供HTML使用
window.reflectionManager = reflectionManager; 