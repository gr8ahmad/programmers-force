<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-8 offset-md-2">
            <h3>Log in</h3>
                    <form>
  <div class="form-group">
   <label>Email: </label>
    <input type="text" class="form-control" v-model="user.email">
  </div>
  <div class="form-group">
   <label>Password</label>
    <input type="password" class="form-control" v-model="user.password">
  </div>
  <button class="btn btn-primary" @click.prevent="login">Login</button>
</form> 
        </div>
    </div>
</div>
</template>

<script>
    import * as firebase from 'firebase'
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                token: ''
            }
        },
        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(response=> {
                    this.$router.replace('admin')
                })
                .catch(error => {
                  console.log(error)  
                })
            }
        }
    }

</script>
