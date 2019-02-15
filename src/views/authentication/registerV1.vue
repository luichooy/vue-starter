<template>
  <div class="authentication-wrapper authentication-1 ui-bg-cover px-4">
    
    <div class="authentication-inner py-5">
      
      <el-card shadow="never" :body-style="{padding: 0}" class="auth-card">
        <div class="p-4 px-sm-5 pt-sm-5">
          <!-- Logo -->
          <div class="d-flex justify-content-center align-items-center pb-2 mb-4">
            <div class="ui-w-60">
              <img src="../../assets/images/brand.png" alt="logo" class="w-100">
            </div>
            <span>vue-admin-template</span>
          </div>
          <!-- / Logo -->
          
          <!--<h5 class="text-center text-muted font-weight-normal mb-4">创建账户</h5>-->
          
          <!-- Form -->
          <el-form :model="credentials" :rules="rules" ref="form" label-position="top">
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
          
          <!--<div class="text-light small mt-4">-->
          <!--点击 “注册”，即代表你同意并愿意遵守-->
          <!--<a href="javascript:void(0)">用户协议</a>和-->
          <!--<a href="javascript:void(0)">隐私政策</a>。-->
          <!--我们会偶尔向您发送相关邮件。-->
          <!--</div>-->
        
        </div>
        <div class="auth-card-footer py-3 px-4 px-sm-5 border-top">
          <div class="text-center text-muted">
            {{ $t('register.hasAccount') }}
            <a @click="$router.push('/loginV1')" href="javascript:void(0)">{{ $t('register.login') }} </a>
          </div>
        </div>
      </el-card>
    
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: '欢迎注册'
    },
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
<style src="./authentication.scss" lang="scss" scoped></style>
