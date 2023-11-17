const app = Vue.createApp({
    data() {
        return {
            name: 'WANJULKIFLI',
            age: 40
        }
    },
    // methods: {
    //     calAge() {
    //         return this.age + 5
    //     }
    // },
    methods: {
        randomNo() {
            return Math.random();
        }
    },

    
    


})

app.mount('#assignment')