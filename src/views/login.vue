<template>
    <section id="bglog" class="d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <div class="wrap d-md-flex">
                        <div class="img" :style="imgStyle"></div>
                        <div class="login-wrap p-4 p-md-5">
                            <div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign In</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        <a class="btn btn-outline-dark" href="/">Home</a>__
                                        <a class="btn btn-outline-dark" href="/register">Sign Up</a>
                                    </p><br>
                                </div>
                            </div>
                            <form action="#" class="signin-form">
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Username</label>
                                    <input type="text" class="form-control" placeholder="Username" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" required>
                                </div><br>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-dark rounded submit px-3" href="">Sign In</button>
                                </div>
                               
                                <div class="form-group d-md-flex">
                                    <div class="w-50 text-left">
                                        <label class="checkbox-wrap checkbox-dark mb-0">Remember Me
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a href="#">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      imgStyle: {
        backgroundImage: "url(" + require('@/assets/log/images/logo.png') + ")",
        backgroundSize: "contain",
        backgroundColor: "rgba(1,58,122,255)"
      }
    };
  }
};
</script>