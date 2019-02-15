<template>
  <div class="page-siderbar">
    <div class="menu-wrapper">
      <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#2e323a"
        text-color="#fff"
        active-text-color="#65CEA7"
        unique-opened
        router
        :collapse-transition="true"
        class="page-menu"
      >
        <el-menu-item index="/home">
          <i class="el-icon-icon ion ion-md-home"></i>
          <span slot="title">{{ $t('sidebar.home') }}</span>
        </el-menu-item>
        <el-submenu index="/authentication">
          <template slot="title">
            <i class="el-icon-icon ion ion-ios-unlock"></i>
            <span>{{ $t('sidebar.authentication') }}</span>
          </template>
          <el-menu-item index="/loginV1">
            <span slot="title" style="margin-left:12px;">{{ $t('sidebar.loginV1') }}</span>
          </el-menu-item>
          <el-menu-item index="/registerV1">
            <span slot="title" style="margin-left:12px;">{{ $t('sidebar.registerV1') }}</span>
          </el-menu-item>
          <el-menu-item index="/loginV2">
            <span slot="title" style="margin-left:12px;">{{ $t('sidebar.loginV2') }}</span>
          </el-menu-item>
          <el-menu-item index="/registerV2">
            <span slot="title" style="margin-left:12px;">{{ $t('sidebar.registerV2') }}</span>
          </el-menu-item>
          <el-menu-item index="/lockscreen">
            <span slot="title" style="margin-left:12px;">{{ $t('sidebar.lockscreen') }}</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/error">
          <template slot="title">
            <i class="el-icon-icon ion ion-ios-bug"></i>
            <span>{{ $t('sidebar.error') }}</span>
          </template>
          <el-menu-item index="/error/404">
            <span slot="title" style="margin-left:12px;">404</span>
          </el-menu-item>
          <el-menu-item index="/error/500">
            <span slot="title" style="margin-left:12px;">500</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'PageSiderbar',
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .page-siderbar {
    height: 100%;
    padding: 8px 0;
    background: #2e323a;
    
    .page-menu {
      height: 100%;
      border-right: none;
      
      &:not(.el-menu--collapse) {
        width: 250px;
      }
    }
    
    .el-menu--collapse .is-active .el-submenu__title i {
      color: #65CEA7;
    }
  }
</style>
