<template>
  <div class="topbar">
    
    <router-link to="/" class="d-inline-block mr-3 h-100 py-3">
      <img src="../../assets/images/brand.png" alt="logo" height="100%">
    </router-link>
    
    <span
      @click="toggleMenu"
      :style="{transform: 'rotateZ(' + (this.isCollapse ? '90' : '0') + 'deg)'}"
      class="collapse-trigger"
    >
      <i class="el-icon-yto-menu"></i>
    </span>
    
    <ul class="topbar-nav">
      <li class="nav-item">
        <Fullscreen></Fullscreen>
      </li>
      <li class="nav-item">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img src="../../assets/images/avatar.png" alt="avatar" class="avatar">
            <span class="ml-2">admin</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="ion ion-ios-person text-muted"></i> &nbsp; 我的账户</el-dropdown-item>
            <el-dropdown-item><i class="ion ion-ios-mail text-muted"></i> &nbsp; 消 息</el-dropdown-item>
            <el-dropdown-item><i class="ion ion-md-settings text-muted"></i> &nbsp; 账户设置</el-dropdown-item>
            <el-dropdown-item><i class="ion ion-md-settings text-muted"></i> &nbsp; 修改密码</el-dropdown-item>
            <el-dropdown-item divided><i class="ion ion-ios-log-out text-danger"></i> &nbsp; 退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li class="nav-item">
        <Language></Language>
      </li>
    </ul>
  </div>
</template>

<script>
  import Fullscreen from '@/components/Fullscreen/Fullscreen';
  import Language from '@/components/Language/Language';
  
  export default {
    name: 'PageTopbar',
    components: {
      Fullscreen,
      Language
    },
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleMenu() {
        this.$emit('onCollapseChange');
      }
    }
  };
</script>

<style src="./topbar.scss" lang="scss" scoped></style>
