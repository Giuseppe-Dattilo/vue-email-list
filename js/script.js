console.log('JS OK');
console.log('Vue OK', Vue);


const app = Vue.createApp({
    nome: 'vue-email-list',
    data(){
        return {
           isLoading: false, 
           mails: [],
           apiUri: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    }, 
    // computed: {
       
    // }, 
    methods: {
       getMails(){
        this.isLoading = true;
        axios.get(this.apiUri).then(response => {
            this.mails.push(response.data.response);
        }).catch(error => {

        }).then(() => {
            this.isLoading = false;
        });
       } 
    },

    mounted () {
       for(let i = 0; i < 10; i++)
       this.getMails();
    }
});

app.mount('#root');