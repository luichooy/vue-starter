<template>
  <div class="authentication-wrapper authentication-4 ui-bg-cover ui-bg-video-container px-4">
    
    <div class="authentication-inner py-5">
      
      <b-card class="p-5">
        <div class="py-4 mb-5">
          <el-steps :active="stepActive" finish-status="success" align-center>
            <el-step title="填写信息"></el-step>
            <el-step title="修改密码"></el-step>
            <el-step title="修改完成"></el-step>
          </el-steps>
        </div>
        
        <b-row align-h="center">
          <b-col sm="8">
            
            <!--填写信息表单-->
            <el-form
              v-if="stepActive === 0"
              :model="step1"
              :rules="rules1"
              ref="step1Form"
              label-width="80px"
            >
              <el-form-item label="手机号" prop="userName">
                <el-input v-model="step1.userName" :disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="verifyCode">
                <div class="d-flex justify-content-between">
                  <el-input v-model="step1.verifyCode" class="mr-3"></el-input>
                  <b-btn
                    @click.prevent="getCode"
                    :disabled="disabled"
                  >
                    {{ getCodeText === '获取验证码' ? getCodeText : getCodeText + 's' }}
                  </b-btn>
                </div>
              </el-form-item>
              <el-form-item>
                <ladda-btn @click.native="nextStep('step1Form')"
                  :loading="btnLoading"
                  data-style="slide-left"
                  class="btn btn-primary btn-block"
                >
                  下一步
                </ladda-btn>
              </el-form-item>
            </el-form>
            
            <!--修改密码表单-->
            <el-form :model="step2" :rules="rules2" ref="step2Form" label-width="80px" v-else-if="stepActive === 1">
              <el-form-item label="新密码" prop="password">
                <el-input v-model="step2.password" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="password2">
                <el-input v-model="step2.password2" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <ladda-btn @click.native="nextStep('step2Form')"
                  :loading="btnLoading"
                  data-style="slide-left"
                  class="btn btn-primary btn-block"
                >
                  确认
                </ladda-btn>
              </el-form-item>
            </el-form>
            
            <div v-else>
              <div class="display-1 d-block ion ion-ios-checkmark-circle-outline text-center text-success mb-4"></div>
              
              <p class="text-center text-big mb-4">密码修改成功，快去登陆吧！</p>
              
              <b-btn @click="$router.replace('/login')" variant="primary" block class="w-50 m-auto">登陆</b-btn>
            </div>
          </b-col>
        </b-row>
      
      </b-card>
    
    </div>
  </div>
</template>

<script>
  import LaddaBtn from '@/vendor/libs/ladda/Ladda';
  
  export default {
    metaInfo: {
      title: '欢迎登陆'
    },
    components: {
      LaddaBtn
    },
    data() {
      // 确认密码自定义验证规则
      const validatePass2 = (rule, value, callback) => {
        if (value !== this.step2.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        // 步骤条的当前状态
        stepActive: 0,
        
        // 步骤一表单数据
        step1: {
          userName: '',
          verifyCode: ''
        },
        
        // 步骤二表单数据
        step2: {
          password: '',
          password2: ''
        },
        rules1: {
          userName: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^1\d{10}$/g, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          verifyCode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        },
        rules2: {
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
          ],
          password2: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        
        // 获取验证码按钮上的文字状态
        getCodeText: '获取验证码',
        
        // 手机输入框及获取验证码的disabled状态
        disabled: false,
        
        // 下一步及确定按钮上loading图标的显示状态
        btnLoading: false
      };
    },
    methods: {
      getCode() {
        if (!/^1\d{10}$/g.test(this.step1.userName)) {
          this.$message.warning('请输入正确的手机号');
          return;
        }
        
        this.$post({
          url: '/customs/monitor/user/sendCode',
          params: { userName: this.step1.userName },
          success(res) {
            this.$message.success(res.message);
            this.changeTextOfCodeVerify();
          }
        });
      },
      verifyMobile() {
        this.$post({
          url: '/customs/monitor/user/verifyCode',
          params: this.step1,
          success(res) {
            // 取消下一步按钮的loading图，并且跳转到下一步
            this.btnLoading = false;
            this.stepActive++;
          },
          error(res) {
            this.btnLoading = false;
            this.$message.error(res.message);
          }
        });
      },
      resetPassword() {
        this.$post({
          url: '/customs/monitor/user/resetPassword',
          params: {
            userName: this.step1.userName,
            password: this.step2.password,
            verifyCode: this.step1.verifyCode
          },
          success(res) {
            // 取消下一步按钮的loading图，并且跳转到下一步
            this.btnLoading = false;
            this.stepActive++;
          },
          error(res) {
            this.btnLoading = false;
            this.$message.error(res.message);
          }
        });
      },
      nextStep(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.btnLoading = true;
            if (formName === 'step1Form') {
              this.verifyMobile();
            }
            
            if (formName === 'step2Form') {
              this.resetPassword();
            }
          } else {
            this.$message.error('表单填写有误，请检查');
            return false;
          }
        });
      },
      changeTextOfCodeVerify() {
        this.getCodeText = 60;
        this.disabled = true;
        const timer = setInterval(() => {
          this.getCodeText = this.getCodeText - 1;
          if (this.getCodeText === 0) {
            clearInterval(timer);
            setTimeout(() => {
              this.getCodeText = '获取验证码';
              this.disabled = false;
            }, 1000);
          }
        }, 1000);
      }
    }
  };
</script>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>
