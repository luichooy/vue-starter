<template>
  <div class="authentication-wrapper authentication-1 ui-bg-cover px-4">
    
    <div class="authentication-inner py-5">
      
      <el-card :body-style="{padding: 0}" footer-class="px-sm-5 text-center text-muted small">
        <div class="p-4 p-sm-5">
          <div class="media align-items-center">
            <img src="../../assets/images/avatar.png" alt="avatar" class="d-block ui-w-60 rounded-circle">
            <div class="media-body ml-3">
              <div class="text-secondary small font-weight-semibold line-height-1 mb-1">{{ $t('lockscreen.currentLogin')
                }}
              </div>
              <div class="text-large font-weight-bolder line-height-1">{{user.name}}</div>
            </div>
          </div>
          
          <hr class="my-4">
          
          <!-- Form -->
          <p class="text-muted small">{{ $t('lockscreen.tips') }}</p>
          <el-input :placeholder="$t('lockscreen.placeholder')" v-model="credentials.password">
            <template slot="append">
              <el-button type="primary" icon="ion ion-md-arrow-forward"></el-button>
            </template>
          </el-input>
          <!-- / Form -->
        </div>
        
        <div class="auth-card-footer py-3 px-4 px-sm-5 border-top">
          <div class="text-center text-muted small">
            {{ $t('lockscreen.notyou') }} <a href="javascript:void(0)">{{ $t('lockscreen.toggle') }}</a>
          </div>
        </div>
      
      </el-card>
    
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      user: {
        name: 'KOBE BRYANT'
      },
      credentials: {
        password: ''
      }
    })
  };
</script>

<!-- Page -->
<style src="./authentication.scss" lang="scss"></style>
