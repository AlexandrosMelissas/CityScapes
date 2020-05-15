<script src="js/register.js"></script>

<div class="container-fluid">
    <div class="row">
        <div class="col-sm">


        </div>
        <div class="col-sm">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title" style="text-align: center">Δημιουργία λογαριασμού</h4>
                    <form id="register-form">
                        <div class="form-group">
                            <input type="text" name="name" id="name" required pattern="^[a-zA-ZΑ-Ωα-ω]+$" class="form-control" placeholder="Όνομα *" />
                            <label style="display:none;" class="error-name text-danger mt-2"></label>
                        </div>
                        <div class="form-group">
                            <input type="text" name="surname" id="surname" required pattern="^[a-zA-ZΑ-Ωα-ω]+$" class="form-control" placeholder="Επίθετο *" />
                            <label style="display:none;" class="error-surname text-danger mt-2"></label>
                        </div>
                        <div class="form-group">
                            <input type="text" name="nickname" id="nickname" required pattern=".{3,}" class="form-control" placeholder="Όνομα χρήστη *" />
                            <label style="display:none" for="nickname" class="error-nickname text-danger mt-2"></label>
                        </div>
                        <div class="form-group">
                            <input type="password" id="password1" name="pass1" required pattern="(?=.*\d)(?=.*[a-zα-ω])(?=.*[A-ZΑ-Ω]).{8,}" class="form-control" placeholder="Κωδικός *" />
                            <label style="display:none" for="password1" class="error-password1 text-danger mt-2"></label>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card">
                <div class="card-body" style="padding-top: 40px">
                    <div class="form-group">
                        <input type="password" name="pass2" class="form-control" id="password2" placeholder="Επιβεβαίωση κωδικού *" />
                        <label style="display:none" for="password2" class="error-password2 text-danger mt-2">Οι κωδικοί δεν ταιριάζουν.</label>
                    </div>

                    <div class="form-group">
                        <input type="email" name="email" id="email" required class="form-control" placeholder="Email *" />
                        <label style="display:none" for="email" class="error-email text-danger mt-2"></label>
                    </div>
                    <div class="form-group">
                        <input type="text" name="age" id="age" minlength="2" maxlength="2" pattern="[0-9]*" required class="form-control" placeholder="Ηλικία *" />
                        <label style="display:none" for="age" class="error-age text-danger mt-2"></label>
                    </div>
                    <div class="form-group">
                        <div class="maxl">
                            <label class="radio inline">
                                <input type="radio" id="male" value="male">
                                <span> Άνδρας </span>
                            </label>
                            <label class="radio inline">
                                <input type="radio" id="female"  value="female">
                                <span>Γυναίκα </span>
                            </label></br>
                            <small class="form-text text-muted mt-2 mb-2">
                            Έχετε ήδη λογαριασμό; <a class="text-info" href="#login.php">Επιστροφή για σύνδεση</a>
                            </small>
                            <input type="button" id="btnRegister" value="Εγγραφή" class="btn btn-outline-info float-left" />
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-sm">

        </div>
    </div>
</div>