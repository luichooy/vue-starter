<template>
  <div class="authentication-wrapper authentication-1 ui-bg-cover px-4">
    
    <div class="authentication-inner py-5">
      
      <el-card shadow="never" :body-style="{padding: 0}" class="auth-card">
        <div class="p-4 p-sm-5">
          <!-- Logo -->
          <div class="d-flex justify-content-center align-items-center pb-2 mb-4">
            <div class="ui-w-60">
              <img src="../../assets/images/brand.png" alt="logo" class="w-100">
            </div>
            <span>vue-admin-template</span>
          </div>
          
          <!-- / Logo -->
          
          <!--<h5 class="text-center text-muted font-weight-normal mb-4">系统登陆</h5>-->
          
          <!-- Form -->
          <el-form :model="credentials" :rules="rules" label-position="top" ref="form">
            <el-form-item :label="$t('login.username')" prop="username">
              <el-input v-model="credentials.username"></el-input>
            </el-form-item>
            <el-form-item :label="$t('login.password')" prop="password" class="form-password">
              <el-input v-model="credentials.password"
                @keyup.enter.native="handleLogin('form')"
                type="password"></el-input>
              <a @click="$router.push('/password_reset')"
                href="javascript:void(0)"
                class="d-block small forget-password">{{ $t('login.forgetPassword') }}</a>
            </el-form-item>
            <el-form-item class="mb-0">
              <el-button @click="handleLogin('form')" type="primary" class="w-100">{{ $t('login.login') }}</el-button>
            </el-form-item>
          </el-form>
          <!-- / Form -->
        
        </div>
        <div class="auth-card-footer py-3 px-4 px-sm-5 border-top">
          <div class="text-center text-muted small">
            {{ $t('login.notAccount') }}
            <a @click.prevent="$router.push('/registerV1')" href="javascript:void(0)">{{ $t('login.register') }}</a>
          </div>
        </div>
      </el-card>
    
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: '欢迎登陆'
    },
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: this.$t('login.enterUsername'), trigger: 'blur' }
          ],
          password: [
            { required: true, message: this.$t('login.enterPassword'), trigger: 'blur' },
            { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            return false;
          }
        });
      },
      login() {
        this.$router.replace('/');
      }
    }
  };
</script>

<!-- Page -->
<style src="./authentication.scss" lang="scss"></style>
<style lang="scss" scoped>
  .form-password {
    position: relative;
    
    .forget-password {
      position: absolute;
      top: -35px;
      right: 0;
    }
  }
</style>
