<?php

include 'playerLists.php';

include 'MusicAPI_mini.php';

$api = new MusicAPI();

# Get data
//$result = $api->search('hello');
// $result = $api->artist('46487');
//$result = $api->detail('35847388');
// $result = $api->album('3377030');
//$result = $api->playlist($playerLists_list[0]);
// $result = $api->url('35847388'); # v2 only
// $result = $api->lyric('35847388');
// $result = $api->mv('501053');

//var_dump($result);
// print_r($result);
//json_decode($result);
// var_dump(json_decode($result));





$urlList = [];
echo $playerLists[0];
foreach ($playerLists_list as $key) {
	$res = json_decode($api->playlist($key),true);
    //print_r($res);
	foreach ($res['playlist']['tracks'] as $key2) {
        $id =json_decode($api->url($key2['id']),true);
		$urlList []= $id['data'][0]['url'];
	}
	shuffle($urlList);
	echo json_encode($urlList);
}

