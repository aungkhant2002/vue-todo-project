let app = new Vue({
    el: "#app",
    data: {
        currentId: 0,
        newMessage: "",
        lists: [],
    },
    computed: {
        doneTotal() {
            return this.lists.filter(el => el.isDone === true).length;
        }
    },
    methods: {
        create() {
            this.currentId++;
            this.lists.push({
                id: this.currentId,
                message: this.newMessage,
                isDone: false,
                isEdit: false,
                isDelete: false
            });
            this.newMessage = "";
        },

        del(x) {
            setTimeout(() => this.lists = this.lists.filter(el => el.id !== x), 600);
        }

    }
});