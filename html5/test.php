<div>
    <div class="toolbar">
        <h1>입력 받은 값</h1>
        <a href="#" class="button back">Back</a>
    </div>
    <ul class="edgetoedge">
		<li> <?php echo '인원 : '.$_POST['number']; ?> </li>
		<li> <?php echo '거리 : '.$_POST['distance']; ?> </li>
		<li> 옵션 : 
		<?php
			$c = count($_POST['opt']);
			foreach( $_POST['opt'] as $opt) {
				echo $opt;
				$c--;
				if ( $c > 0 ) {
					echo ", ";
				}
			}
		?>
		</li>
    </ul>
</div>
