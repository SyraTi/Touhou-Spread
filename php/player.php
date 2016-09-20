<?php

include 'playerLists.php';

include 'MusicAPI_mini.php';
$api = new MusicAPI();

$op = $_POST['op'];

session_start();
# Get data
//$result = $api->search('hello');
// $result = $api->artist('46487');
//$result = $api->detail('35847388');
// $result = $api->album('3377030');
//$result = $api->playlist($playerLists_list[0]);
//$result = $api->url('35847388'); # v2 only
//$result = $api->lyric('35847388');
// $result = $api->mv('501053');
//echo $result;
//var_dump($result);
// print_r($result);
//json_decode($result);
// var_dump(json_decode($result));

if($op == 'loadMusicList')
{
    loadMusicList();
}
else
{
    loadFirstMusic();
}



function getMusicList($listId)
{
    global $api;
    return json_decode($api->playlist($listId),true);
}


function getMusicUrl($track)
{
    global $api;
    $id =json_decode($api->url($track['id']),true);
    return $id['data'][0]['url'];
}






function loadFirstMusic()
{
    global $playerLists_list;
    $rand = mt_rand(0,count($playerLists_list)-1);
    $listId = $playerLists_list[$rand];
    $list = getMusicList($listId);
    $musicId = mt_rand(0,count($list['playlist']['tracks']));
    $track = $list['playlist']['tracks'][$musicId];
    $url = getMusicUrl($track);
    $_SESSION['firstUrl'] = $url;
    //echo $_SESSION['firstUrl'];
    echo $url;
}


function loadMusicList()
{
    //echo $_SESSION['firstUrl'];
    $urlList = [];
    //echo $playerLists[0];
    global $playerLists_list;
    foreach ($playerLists_list as $listId)
    {
        $list = getMusicList($listId);
        //print_r($res);
        foreach ($list['playlist']['tracks'] as $track)
        {
            $url = getMusicUrl($track); // echo $_SESSION['firstUrl']. '\n' . $url. '                              ';
            if (substr($_SESSION['firstUrl'],strripos($_SESSION['firstUrl'],'/')) !== substr($url,strripos($url,'/')))
            {
                $urlList []= $url;
             //   echo $_SESSION['firstUrl'];
             //   break;
            }
        }
        shuffle($urlList);
        echo json_encode($urlList);
    }
}
