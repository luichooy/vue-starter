<template>
  <div class="authentication-wrapper authentication-2">
    
    <div class="authentication-inner">
      
      <!-- Side container -->
      <!-- Do not display the container on extra small, small and medium screens -->
      <div class="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover bg-image p-5">
        
        <!-- Text -->
        <div class="w-100 text-white px-5">
          <h1 class="display-4 font-weight-bolder mb-4">JOIN OUR<br>COMMUNITY</h1>
          <div class="text-large font-weight-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu gravida faucibus.
            Suspendisse viverra pharetra purus. Proin fringilla ac lorem at sagittis. Proin tincidunt dui et nunc
            ultricies dignissim.
          </div>
        </div>
        <!-- /.Text -->
      </div>
      <!-- / Side container -->
      
      <!-- Form container -->
      <div class="d-flex col-lg-4 align-items-center bg-white p-5">
        <!-- Inner container -->
        <!-- Have to add `.d-flex` to control width via `.col-*` classes -->
        <div class="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
          <div class="w-100">
            
            <!-- Logo -->
            <div class="d-flex justify-content-center align-items-center">
              <div class="ui-w-60">
                <img src="../../assets/images/brand.png" alt="logo" class="w-100 h-100">
              </div>
              <span>vue-admin-template</span>
            </div>
            <!-- / Logo -->
            
            <!--<h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">Login to Your Account</h4>-->
            
            <!-- Form -->
            <el-form :model="credentials" :rules="rules" label-position="top" ref="form" class="my-5">
              <el-form-item :label="$t('login.username')" prop="username">
                <el-input v-model="credentials.username"></el-input>
              </el-form-item>
              <el-form-item :label="$t('login.password')" prop="password" class="form-password">
                <el-input v-model="credentials.password"
                  @keyup.enter.native="handleLogin('form')"
                  type="password"></el-input>
                <a @click="$router.push('/password_reset')"
                  href="javascript:void(0)"
                  class="d-block small forget-password">{{ $t('login.forgetPassword') }}?</a>
              </el-form-item>
              <el-form-item class="mb-0">
                <el-button @click="handleLogin('form')" type="primary" class="w-100">{{ $t('login.login') }}</el-button>
              </el-form-item>
            </el-form>
            <!-- / Form -->
            
            <div class="text-center text-muted">
              {{ $t('login.notAccount') }}
              <a @click.prevent="$router.push('/registerV2')" href="javascript:void(0)">{{ $t('login.register') }}</a>
            </div>
          
          </div>
        </div>
      </div>
      <!-- / Form container -->
    
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
