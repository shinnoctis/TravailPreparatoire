<?php include '/includes/getWorkHours.php'?>
<!DOCTYPE html>

<?php setcookie('Schedule', json_encode(getWorkHours()),0,'/');?>
<html>
    <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Horaire d'ouverture de XXXXX</title>
        <link type='text/css' href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css' rel='stylesheet'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
        <script src='js/schedule.js'></script>

    </head>
    <body>
        <section class='section'>
            <div class='container'>
                <div class='columns is-centered'>
                    <div class='column is-half'>
                        <p class='title is-2'>Nous sommes actuellement <span id='IsOpen'></span></p>
                        <p id='NextOpening' class='subtitle is-3'></p>                    
                    </div>
            </div>
        </section>
        <section class='section'>
            <div class='container'>
                <div class='columns is-centered'>
                    <div id='schedule' class='column is-half'>
                    <p class='panel-heading'>
                         Horaire d'ouverture                  
                    </p>
                    <?php 
                    $groupby = getWorkHours();
                    foreach($groupby as $day => $workhours){
                        ?>
                        <div class='panel-block'> 
                            <p><?php echo $day?> :&nbsp;</p></br>
                            <ul id='workHours'>
                                <?php foreach($workhours as $workhour){?>
                                    <?php if ($workhour->name_days != 'Sun') {?>
                                        <li id='<?php echo $workhour->id_workhours?>'>
                                            <?php echo $workhour->start_workhours?> - <?php echo $workhour->end_workhours?>
                                        </li>
                                    <?php
                                    }
                                    else{ 
                                        echo "<li id='$workhour->id_workhours'>Fermé</li>";
                                    }
                                }?>
                            </ul>
                        </div>
                    <?php
                    }
                    ?>
            </div>
        </section>
    </body>
</html>