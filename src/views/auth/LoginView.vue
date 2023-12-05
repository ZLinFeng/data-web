<script setup lang="ts">

</script>

<template>
<div class="login-container">
  <el-row>
    <el-col :span="12" :xs="0"/>
    <el-col :span="12" :xs="24" class="form-wrapper">
      <el-form class="login-form">
        <el-form-item>
          <el-input />
        </el-form-item>
        <el-form-item>
          <el-input type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">Login</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>

<style scoped>
.login-container {
  height: 100vh;
  width: 100%;
  background: url("@/assets/images/reshot-illustration-shopping-data-VEYZBMTSNQ.jpg") no-repeat right bottom;

  .form-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-form {
    width: 80%;
  }

  .el-row {
    height: 100%;
  }
}
</style>