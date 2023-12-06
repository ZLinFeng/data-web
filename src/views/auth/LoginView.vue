<script setup lang="ts">

import SvgIcon from "@/components/commons/SvgIcon.vue";
import {onMounted, ref} from "vue";

const username = ref("");
const password = ref("");
const welcome = ref("");
const welcomeText = "Welcome Giraffe!";
//const introductionText = "Provide data storage and computational capabilities for Skynet, achieving a complete analysis from 'data' to 'recognition'.";
const introductionText = "Data storage and computational capabilities for Skynet.";
const introduction = ref("");
let index = 0;
let introductionIndex = 0;

const printWelcome = () => {
  if (index < welcomeText.length) {
    welcome.value += welcomeText.charAt(index);
    index++;
    setTimeout(printWelcome, 300);
  }
}

const printIntroduction = () => {
  if (introductionIndex < introductionText.length) {
    introduction.value += introductionText.charAt(introductionIndex);
    introductionIndex++;
    setTimeout(printIntroduction, 40);
  }
}

onMounted(() => {
  printWelcome();
  printIntroduction();
})
</script>

<template>
  <div class="login-container">
    <div class="form-container">
      <el-row class="form-wrapper">
        <el-col :span="12" class="form-submit-wrapper">
          <el-row class="logo-wrapper">
            <div class="logo-text">
              <span>Grandline.com</span>
            </div>
          </el-row>
          <el-row class="form">
            <el-form>
              <div class="welcome">
                <svg-icon name="logo" class="logo"/>
                <span>{{ welcome }}</span>
              </div>
              <div class="form-label">
                <span>Username</span>
              </div>
              <el-input placeholder="Username@domain.com"
                        clearable
                        v-model="username"/>
              <div class="form-label">
                <span>Password</span>
              </div>
              <el-input type="password"
                        placeholder="Your Password..."
                        v-model="password"
                        clearable/>
              <div class="form-btn">
                <el-button type="primary">Sign in</el-button>
              </div>
              <div class="form-btn">
                <el-button type="danger">Sign up</el-button>
              </div>
            </el-form>
          </el-row>
        </el-col>
        <el-col :span="12" class="form-bg-wrapper">
          <span>{{ introduction }}</span>
          <div class="form-bg"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.logo {
  font-size: 2em;
  margin-right: 0.5em;
}

.logo-text {
  margin: 0.5em 0.2em 0.2em 1em;
  font-size: 1.75em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bolder;
  color: #231212;
}

.welcome {
  margin-bottom: 2.5em;
  display: flex;
  justify-content: center;

  > span {
    font-size: 2.5em;
    color: #231212;
    border-right: 0.1em solid;
    animation: blink 1s infinite;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.form-label {
  margin-bottom: 0.5em;

  > span {
    font-size: 1.25em;
  }
}

.logo-wrapper {
  height: 10%;
  width: 100%;
}

.login-container {
  height: 100vh;
  width: 100%;
  background: url("@/assets/images/login.jpeg") no-repeat center;
  background-size: 100%, 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 60%;
    height: 70%;
    background-color: white;
    border-radius: 10px;
  }

  .form-wrapper {
    height: 100%;
    width: 100%;
  }
}

.form-bg-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: end;

  > span {
    position: relative;
    /*width: 95%;*/
    font-size: 1.3em;
    display: inline-block;
    line-height: 1.5;
    color: #8a92fc;
    top: 2em;
    text-indent: 2em;
  }
}

.form-bg {
  width: 90%;
  height: 80%;
  background: url("@/assets/images/form.png") no-repeat center;
  background-size: 100%, 100%;
}

.form {
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-form {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .el-form-item__content {
    width: 100%;
  }
}

.el-input {
  margin-bottom: 1em;
  height: 2.5em;
  font-size: 1.2em;
}

.form-btn {
  width: 100%;
  height: 2.5em;
  margin-bottom: 1em;

  > .el-button {
    width: 100%;
    height: 100%;
  }
}

</style>