<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Welcome to woof</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet">

    <link rel="stylesheet" href="/css/app.css">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://kit.fontawesome.com/15a0d76b97.js" crossorigin="anonymous"></script>



</head>

<body>

    <div id="app">

        <main id="content" class="content">

            <div class="section no-pad-bot" id="index-banner">
                <div class="container">
                    <br><br>

                    <div class="row center">
                        <img src="/images/logo.png" class="img-fluid" style="height:150px; margin:0 auto;" alt="">
                    </div>

                    <br><br>

                </div>
            </div>


            <div class="container">
                <div class="section">

                    <div class="row">
                        <form class="col-lg-8 offset-lg-2">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="first_name" type="text" class="validate">
                                    <label for="first_name">Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="last_name" type="text" class="validate">
                                    <label for="last_name">Phone</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate">
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="Pet boarding">Pet boarding - I need a place to stay!</option>
                                        <option value="Pet walks">Pet walks - I need a walk!</option>
                                        <option value="Pet sitting">Pet sitting - I don’t want to be alone!</option>
                                        <option value="Drop in visits">Drop in visits - Come hang with me!</option>
                                    </select>
                                    <label>Service needed</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-filed col s6">
                                    <input type="text" class="datepicker">
                                    <label for="datepicker">Start date</label>
                                </div>
                                <div class="input-filed col s6">
                                    <input type="text" class="datepicker">
                                    <label for="datepicker">Start date</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="number_pets" type="text" class="validate">
                                    <label for="number_pets">Number of pets</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <label>Type of pets</label><br><br>
                                    <p>
                                        <label style="margin-right:10px">
                                            <input name="group1" type="radio" checked />
                                            <span>DOG</span>
                                        </label>
                                        <label style="margin:10px">
                                            <input name="group1" type="radio" />
                                            <span>CAT</span>
                                        </label>
                                        <label style="margin:10px">
                                            <input class="with-gap" name="group1" type="radio" />
                                            <span>OTHER</span>
                                        </label>
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <label>Spayed/Neutered</label><br><br>
                                    <p>
                                        <label style="margin-right:10px">
                                            <input name="Spayed/Neutered" type="radio" checked />
                                            <span>YES</span>
                                        </label>
                                        <label style="margin:10px">
                                            <input name="Spayed/Neutered" type="radio" />
                                            <span>NO</span>
                                        </label>
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <label>People friendly</label><br><br>
                                    <p>
                                        <label style="margin-right:10px">
                                            <input name="PeopleFriendly" type="radio" checked />
                                            <span>YES</span>
                                        </label>
                                        <label style="margin:10px">
                                            <input name="PeopleFriendly" type="radio" />
                                            <span>NO</span>
                                        </label>
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <label>Dog friendly</label><br><br>
                                    <p>
                                        <label style="margin-right:10px">
                                            <input name="DogFriendly" type="radio" checked />
                                            <span>YES</span>
                                        </label>
                                        <label style="margin:10px">
                                            <input name="DogFriendly" type="radio" />
                                            <span>NO</span>
                                        </label>
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Pet’s name, gender, age, breed. (Optional) </label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea2" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Additional information. (Optional) </label>
                                </div>
                            </div>

                            <div class="row">
                                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>


                        </form>
                    </div>

                </div>
                <br><br>
            </div>

        </main>

    </div>




    <script src="/js/app.js"></script>
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <script>
        // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });



    </script>
</body>

</html>
