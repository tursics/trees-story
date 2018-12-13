<?php
	$path = 'data/visitors.json';

	function createLogFile() {
		global $path;

		if( !file_exists($path)) {
			$json = [
				'title' => 'Großstadt-Baum',
				'quiz' => [
					'page1' => [
						'2,9x' => 0,
						'8,3x' => 0,
						'10,6x' => 0,
						'17,1x' => 0
					],
					'page2' => [
						'1,2x' => 0,
						'2,8x' => 0,
						'4,1x' => 0,
						'5,7x' => 0
					],
					'page3' => [
						'3,1 m' => 0,
						'6,2 m' => 0,
						'12,3 m' => 0,
						'24,4 m' => 0
					],
					'page4' => [
						'Straßen' => 0,
						'gleichviel' => 0,
						'Parks' => 0
					],
					'page6' => [
						'sum' => 0,
						'count' => 0
					],
					'page7' => [
						'305' => 0,
						'737' => 0,
						'1380' => 0,
						'1752' => 0
					],
					'page8' => [
						'sum' => 0,
						'count' => 0
					],
					'page9' => [
						'sum' => 0,
						'count' => 0
					],
					'page10' => [
						'sum' => 0,
						'count' => 0
					]
				],
				'donate' => []
			];

			for ($i = 0; $i <= 1000; ++$i) {
				$json['donate'][] = 0;
			}

			file_put_contents($path, json_encode($json));
		}
	}

	function writeLogFile() {
		global $path;

		$json = json_decode(file_get_contents($path), true);
		$page = intval(htmlspecialchars($_GET['page']));
		$value = htmlspecialchars($_GET['value']);

		if (in_array($page, [1, 2, 3, 4, 7])) {
			$json['quiz']['page' . $page][$value] += 1;
		}
		if (in_array($page, [6, 8, 9, 10])) {
			$json['quiz']['page' . $page]['sum'] += intval($value);
			$json['quiz']['page' . $page]['count'] += 1;
		}
		if ($page == 6) {
			$json['donate'][intval($value)] += 1;
		}

		file_put_contents($path, json_encode($json));
	}

	createLogFile();
	writeLogFile();

	echo('OK');
?>