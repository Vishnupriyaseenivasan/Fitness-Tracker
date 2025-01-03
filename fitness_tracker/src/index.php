<?php include('./partials/header.php') ?>
    
    <div class="main">
        <div class="login-container">
            <i class="fa-solid fa-user-lock lock-icon"></i>
            <h2 class="text-center mb-5">Password Manager App</h2>
            <div class="login-form">
                <h5 class="text-center">-Login Form-</h5>
                <form action="./endpoint/login.php" method="POST">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" name="username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password">
                        <small class="show-login-form link-show">No Account? Register Here!</small>
                    </div>
                    <button type="submit" class="form-control btn btn-dark">Submit</button>
                </form>
            </div>

            <div class="registration-form" style="display: none;">
                <h5 class="text-center">-Registration Form-</h5>
                <form action="./endpoint/add-user.php" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="text" class="form-control" id="phoneNumber" name="phone_number">
                    </div>
                    <div class="form-group">
                        <label for="emailAddress">Email Address</label>
                        <input type="text" class="form-control" id="emailAddress" name="email_address">
                    </div>
                    <div class="form-group">
                        <label for="createUsername">Username</label>
                        <input type="text" class="form-control" id="createUsername" name="username">
                    </div>
                    <div class="form-group">
                        <label for="createPassword">Password</label>
                        <input type="password" class="form-control" id="createPassword" name="password">
                        <small class="show-registration-form link-show">Already have an accont? Log in here!</small>
                    </div>
                    <button type="submit" class="form-control btn btn-dark">Create Account</button>
                </form>
            </div>
        </div>
    </div>


<?php include('./partials/footer.php') ?>