<?php
function dbConnect()
{
    try
    {
        $config = parse_ini_file('/includes/config.ini');
        $dsn = "mysql:host=".$config['dbhost'].";dbname=".$config['dbname'];
        $_connect = new \PDO($dsn, $config['dbuser'],$config['dbpass']);
        return $_connect;

    }

    catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }
}

function getWorkHours()
{
    $db = dbConnect();
    $req = $db->query('SELECT id_workhours,start_workhours,end_workhours,days.name_days FROM workhours INNER JOIN days ON  workhours.idx_days = days.id_days GROUP BY name_days, start_workhours ORDER BY id_days');
    
    $groupby = array();
    while($record = $req->fetch(PDO::FETCH_OBJ))
    {
        $groupby[$record->name_days][] = $record;
    }
    return $groupby;
    $db = null;
    exit;
}
?>