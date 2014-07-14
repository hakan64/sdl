var EEMPTY = 1;
var EBLOCK = 2;

var piece0 = [[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EBLOCK,EEMPTY],
			[EEMPTY,EBLOCK,EBLOCK,EBLOCK,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY]];
var piece1 = [[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EBLOCK,EEMPTY,EEMPTY],
			[EEMPTY,EBLOCK,EBLOCK,EBLOCK,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY]];
var piece2 = [[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EBLOCK,EBLOCK,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EBLOCK,EBLOCK,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY]];
var piece3 = [[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EBLOCK,EBLOCK,EEMPTY],
			[EEMPTY,EBLOCK,EBLOCK,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY]];
var piece4 = [[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EBLOCK,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EBLOCK,EBLOCK,EBLOCK,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY]];
var piece5 = [[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EBLOCK,EBLOCK,EEMPTY],
			[EEMPTY,EEMPTY,EBLOCK,EBLOCK,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY]];
var piece6 = [[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EBLOCK,EBLOCK,EBLOCK,EBLOCK,EBLOCK],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY],
			[EEMPTY,EEMPTY,EEMPTY,EEMPTY,EEMPTY]];

var canvas;

var ctx;

var currPiece;
var nextPiece;
var currColor = {};
	currColor.r= Math.round(Math.random()*255);
	currColor.g= Math.round(Math.random()*255);
	currColor.b= Math.round(Math.random()*255);

var nextColor = {};
	nextColor.r= Math.round(Math.random()*255);
	nextColor.g= Math.round(Math.random()*255);
	nextColor.b= Math.round(Math.random()*255);

var pieceX,pieceY;

var map;

var score;
var endCounter;
var levelCounter;
var timerInterval;
var pieceCreated;
var timerID;

var WIDTH;
var HEIGHT;
var BLOCKSIZE;
var W;
var H;


function selectPiece()
{
	var r = (Math.round(Math.random()*10))%7;
	switch(r)
	{
	case 0:
		return piece0;
	break;
	case 1:
		return piece1;
	break;
	case 2:
		return piece2;
	break;
	case 3:
		return piece3;
	break;
	case 4:
		return piece4;
	break;
	case 5:
		return piece5;
	break;
	case 6:
		return piece6;
	break;
	
	}
	
}

function initStack()
{
	map = new Array(H);
	for(var j=0;j<H;j++)
	{
		map[j] = new Array(W);
		
	}
	for(var j=0;j<H-1;j++)
	{
		for(var i=0;i<W;i++)
		{
			//walls
			if(i == 0 || i == W-1)
			{
				map[i][j] = {};
				map[i][j].r = 0x55;
				map[i][j].g = 0x55;
				map[i][j].b = 0x55;
			}
			//space
			else
			{
				map[i][j] = {};
				map[i][j].r = 0x00;
				map[i][j].g = 0x00;
				map[i][j].b = 0x00;
			}
		}
	}
	//bottom line
	for(var i=0;i<W;i++)
	{
		map[i][j] = {};
		map[i][j].r = 0x55;
		map[i][j].g = 0x55;
		map[i][j].b = 0x55;
	}


	score = 0;
	timerInterval = 500;
	endCounter = 0;
	pieceCreated = false;

}

function initPiece()
{
	//selectPiece(&(currPiece[0][0]));
	currPiece = nextPiece;
    nextPiece = selectPiece();

	currColor.r = nextColor.r;
	currColor.g = nextColor.g;
	currColor.b = nextColor.b;

	nextColor.r= Math.round(Math.random()*255);
	nextColor.g= Math.round(Math.random()*255);
	nextColor.b= Math.round(Math.random()*255);

	pieceX = Math.floor(W/3);
	pieceY = 0;
	pieceCreated = true;

}

function checkCollision(xinc,yinc)
{
	for(var i=0;i<5;i++)
	{
		for(var j=0;j<5;j++)
		{
			if(currPiece[i][j] == EBLOCK && (map[i+pieceX+xinc][j+pieceY+yinc].r != 0 && map[i+pieceX+xinc][j+pieceY+yinc].g != 0 && map[i+pieceX+xinc][j+pieceY+yinc].b != 0))
				return true;
		}
	}
	return false;
}

function pushPieceOntoStack()
{
	for(var i=0;i<5;i++)
	{
		for(var j=0;j<5;j++)
		{
			if(currPiece[i][j] == EBLOCK)
			{
				map[i+pieceX][j+pieceY].r = currColor.r;
				map[i+pieceX][j+pieceY].g = currColor.g;
				map[i+pieceX][j+pieceY].b = currColor.b;
			}
		}	
	}
}

function rotatePiece()
{
	var temp = [];
	for(var i=0;i<5;i++)
		temp[i] = [];

	for(var i=0;i<5;i++)
	{
		for(var j=0;j<5;j++)
		{
			temp[i][j] = currPiece[i][j];
		}
	}
	for(var i=0;i<5;i++)
	{
		for(var j=0;j<5;j++)
		{
			currPiece[i][j] = temp[4-j][i];
		}
	}
	//if rotated piece has collision, revert
	if(checkCollision(0,0))
	{
		for(var i=0;i<5;i++)
		{
			for(var j=0;j<5;j++)
			{
				currPiece[i][j] = temp[i][j];
			}
		}
	}

}

function movePieceLeft()
{
	if(!checkCollision(-1,0))
		pieceX--;
}
function movePieceRight()
{
	if(!checkCollision(1,0))
		pieceX++;

}

function castShadow()
{
	var temp = pieceY;
	while(!checkCollision(0,1))
		pieceY++;

	//shadowPiece
	for(var i=0;i<5;i++)
	{
		for(var j=0;j<5;j++)
		{
			if(currPiece[i][j] == EBLOCK)
			{
				ctx.beginPath();
				ctx.fillStyle = "rgba("+0x22+","+0x22+","+0x22+",1)";
				ctx.fillRect((i+pieceX)*BLOCKSIZE, (j+pieceY)*BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);
			}
		}
	}
	//reset piece pos
	pieceY = temp;


}

function dropPiece()
{
	if(!checkCollision(0,1))
	{
		pieceY++;
		if(pieceCreated)
			pieceCreated = false;
	}else
	{
		pushPieceOntoStack();
		initPiece();
		rowCheck();
		if(pieceCreated)
			endCounter++;
		//if stack is filled, quit
		if(endCounter>3)
		{
			//end
			//clearInverval(timerID);
			alert("Game Over! Score: "+score);
			initGame();
		}
	}

}

function rowCheck()
{
	var dstRow = H-2;
	var srcRow = H-2;

	while(srcRow>=0)
	{
		var isRowFull = true;
		//check row
		for(var i=1;i<W-1;i++)
		{
			if(map[i][srcRow].r == 0 && map[i][srcRow].g == 0 && map[i][srcRow].b == 0)
			{
				isRowFull = false;
				break;
			}
		}

		//shift row
		if(!isRowFull)
		{
			if(dstRow!=srcRow)
			{
				for(var i=1;i<W-1;i++)
				{
					map[i][dstRow].r = map[i][srcRow].r;
					map[i][dstRow].g = map[i][srcRow].g;
					map[i][dstRow].b = map[i][srcRow].b;
				}
			}
			srcRow--;
			dstRow--;
		}else
		{
			//we have a full row, so add points
			score+=7;

			levelCounter++;
			if(levelCounter==10)
			{
				timerInterval-=50;
				levelCounter = 0;
			}

			srcRow--;
		}

	}

	//fill remaining rows with 0
	while(dstRow>=0)
	{
		for(var i=1;i<W-1;i++)
		{
			map[i][dstRow].r = 0;
			map[i][dstRow].g = 0;
			map[i][dstRow].b = 0;
		}
		dstRow--;
	}

}

function dropDownPiece()
{
	while(!checkCollision(0,1))
		pieceY++;

	pushPieceOntoStack();
	initPiece();
	rowCheck();
}

function drawPiece()
{
	//currPiece
	for(var i=0;i<5;i++)
	{
		for(var j=0;j<5;j++)
		{
			if(currPiece[i][j] == EBLOCK)
			{
				ctx.beginPath();
				ctx.fillStyle = "rgba("+currColor.r+","+currColor.g+","+currColor.b+",1)";
				ctx.fillRect((i+pieceX)*BLOCKSIZE, (j+pieceY)*BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);

			}
		}
	}
	//nextPiece
	for(var i=0;i<5;i++)
	{
		for(var j=0;j<5;j++)
		{
			if(nextPiece[i][j] == EBLOCK)
			{
				ctx.beginPath();
				ctx.fillStyle = "rgba("+nextColor.r+","+nextColor.g+","+nextColor.b+",1)";
				ctx.fillRect((i+W)*BLOCKSIZE, (j)*BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);

			}
		}
	}

}


function drawStack()
{
	for(var j=0;j<H;j++)
	{
		for(var i=0;i<W;i++)
		{
			ctx.beginPath();
			ctx.fillStyle = "rgba("+map[i][j].r+","+map[i][j].g+","+map[i][j].b+",1)";
			ctx.fillRect((i)*BLOCKSIZE, (j)*BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);
		}
	}
}

function drawScore()
{
	ctx.fillStyle = "white";
	ctx.font = "bold "+BLOCKSIZE+"px Arial";
	ctx.fillText("Score: "+score, BLOCKSIZE, BLOCKSIZE);
}

function drawAll()
{

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);

	drawStack();
	castShadow();
	drawPiece();
	drawScore();


}
function timerCallback()
{
	dropPiece();

	drawAll();

}

function initGame()
{
	
	//select next piece first
	nextPiece = selectPiece();

	nextColor.r= Math.round(Math.random()*255);
	nextColor.g= Math.round(Math.random()*255);
	nextColor.b= Math.round(Math.random()*255);

	initPiece();

	initStack();

}

function onKeyDown(e)
{
	switch(e.keyCode)
	{
		//left
		case 37:
		movePieceLeft();
		drawAll();
		break;
		//up
		case 38:
		rotatePiece();
		drawAll();
		break;
		//right
		case 39:
		movePieceRight();
		drawAll();
		break;
		//down
		case 40:
		dropDownPiece();
		drawAll();
		break;

	}
}


window.onload = function(){
	canvas = document.getElementById("canvas");
	canvas.focus();
	ctx = canvas.getContext("2d");

	WIDTH = canvas.width;
	HEIGHT = canvas.height;
	BLOCKSIZE = 10;
	W = ((WIDTH/BLOCKSIZE)-5);
	H = (HEIGHT/BLOCKSIZE);

	initGame();

	canvas.addEventListener("keypress", onKeyDown, true);

	timerID = setInterval(timerCallback, 500);
}

