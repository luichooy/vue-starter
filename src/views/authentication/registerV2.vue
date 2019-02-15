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
              <span>vue admin template</span>
            </div>
            <!-- / Logo -->
            
            <!--<h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">Login to Your Account</h4>-->
            
            <!-- Form -->
            <el-form :model="credentials" :rules="rules" ref="form" label-position="top" class="my-5">
              <el-form-item :label="$t('register.username')" prop="userName">
                <el-input v-model="credentials.userName" :disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item :label="$t('register.verifyCode')" prop="verifyCode">
                <div class="d-flex justify-content-between">
                  <el-input v-model="credentials.verifyCode" class="mr-3"></el-input>
                  <el-button @click="getCode" :disabled="disabled">
                    {{ getCodeText === this.$t('register.getCode') ? getCodeText : getCodeText + 's' }}
                  </el-button>
                </div>
              </el-form-item>
              <el-form-item :label="$t('register.email')" prop="email">
                <el-input v-model="credentials.email"></el-input>
              </el-form-item>
              <el-form-item :label="$t('register.password')" prop="password">
                <el-input v-model="credentials.password" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="handleRegister('form')" type="primary" class="w-100">{{ $t('register.register') }}
                </el-button>
              </el-form-item>
            </el-form>
            <!-- / Form -->
            
            <div class="text-center text-muted">
              {{ $t('register.hasAccount') }}
              <a @click="$router.push('/loginV2')" href="javascript:void(0)">{{ $t('register.login') }}</a>
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
    data() {
      return {
        credentials: {
          userName: '',
          verifyCode: '',
          email: '',
          password: ''
        },
        rules: {
          userName: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^1\d{10}$/g, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          verifyCode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { pattern: /^.+@.+\..+$/g, message: '请输入正确的邮箱格式', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
          ]
        },
        disabled: false,
        getCodeText: this.$t('register.getCode')
      };
    },
    methods: {
      getCode() {
        if (!/^1\d{10}$/g.test(this.credentials.userName)) {
          this.$message.warning('请输入正确的手机号');
          return;
        }
        
        this.$message.success('验证码发送成功');
        this.changeTextOfCodeVerify();
      },
      handleRegister(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.registerV1();
          } else {
            return false;
          }
        });
      },
      register() {
        this.$confirm('恭喜你，注册成功！快去登陆吧。', '提示', {
          confirmButtonText: '去登陆',
          cancelButtonText: '稍后登陆',
          type: 'success'
        }).then(() => {
          this.$router.replace('/login');
        }).catch(() => {});
      },
      changeTextOfCodeVerify() {
        this.disabled = true;
        this.getCodeText = 60;
        const timer = setInterval(() => {
          this.getCodeText = this.getCodeText - 1;
          if (this.getCodeText === 1) {
            clearInterval(timer);
            setTimeout(() => {
              this.getCodeText = this.$t('register.getCode');
              this.disabled = false;
            }, 1000);
          }
        }, 1000);
      }
    }
  };
</script>

<!-- Page -->
<style src="./authentication.scss" lang="scss"></style>
