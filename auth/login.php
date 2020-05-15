<script src="js/login.js"></script>

<div class="container-lg">
  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
      <div class="card">
        <img src="images/login_logo.jpg" class="m-5 img-fluid" id="img">
      </div>
    </div>
    <div class="col-sm">
      <div class="card">
        <div class="card-body" id="form-body">
          <h3 class="card-title" style="text-align: center">Σύνδεση</h3>
          <form class="m-5" id="form">
            <div class="form-group">
              <label for="exampleInputEmail1">Όνομα χρήστη</label>
              <input name="nickname" id="nickname" type="text" class="form-control" placeholder="Όνομα χρήστη">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Κωδικός</label>
              <input name="password" id="password" type="password" class="form-control" placeholder="Κωδικός πρόσβασης">
              <small style="display:none" class="error text-danger mt-2">Παρακαλώ ελέγξτε τα στοιχεία σας και προσπαθήστε ξανά.</small>
              <small class="form-text text-muted mt-2">
                Δεν έχετε λογαριασμό? <a class="text-info" href="#register.php">Εγγραφτείτε τώρα δωρεάν!</a>
              </small>
            </div>
            <input id="submitBtn" type="submit" value="Σύνδεση" class="btn btn-outline-info float-left">
          </form>
        </div>
      </div>
    </div>
    <div class="col-sm">

    </div>
  </div>
</div>

