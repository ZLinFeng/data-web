<script setup lang="ts">

</script>

<template>
<div class="login-container">
  <div class="form-container">
    <el-row class="form-wrapper">
      <el-col :span="12" class="form-submit-wrapper">
        <el-form>
          <el-form-item>
            <span>Username</span>
            <el-input />
          </el-form-item>
          <el-form-item>
            <span>Password</span>
            <el-input type="password"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12" class="form-bg-wrapper">

      </el-col>
    </el-row>
  </div>
</div>
</template>

<style scoped>
.login-container {
  height: 100vh;
  width: 100%;
  background: url("@/assets/images/login.webp") no-repeat center;
  background-size: 100%, 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 80%;
    height: 80%;
    background-color: white;
    border-radius: 3em;
  }

  .form-wrapper {
    height: 100%;
    width: 100%;
  }
}

.form-bg-wrapper {
  background: url("@/assets/images/form-bg.png") no-repeat center;
  background-size: 100%, 100%;
}

.form-submit-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>