var liczby = [];
var czas = 10;

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = '#000';

function Rysuj (liczby)
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < liczby.length; i++)
	{
		ctx.beginPath();
		ctx.moveTo(2 * i + 1, 500);
		ctx.lineTo(2 * i + 1, 500 - (liczby[i]));
		ctx.stroke();
	}
}

function Losuj(ile)
{
	liczby = [];

	for (var i = 0; i < ile; i++)
	{
		liczby.push(Math.floor(Math.random() * 500) + 1);
	}
	Rysuj(liczby);
}

function SortujN()
{
	function pi()
	{
		var i = 0;
		function pi2()
		{
			if (liczby[i] > liczby[i+1])
			{
				var ltym = liczby[i];
				liczby[i] = liczby[i + 1];
				liczby[i + 1] = ltym;
				
				Rysuj(liczby);

				setTimeout(pi, czas);
			}
			else
			{
				i++;

				if (i == liczby.length)
				{
					return;
				}
				else
				{
					setTimeout(pi2, czas);
				}
			}
		}
		pi2();
	}
	pi();
}

function SortujB()
{
	var j = 1;
	function pj ()
	{
		if (j < liczby.length)
		{
			i = 0;
			function pi ()
			{
				if (i < liczby.length)
				{
					if (liczby[i] > liczby[i + 1])
					{
						var ltym = liczby[i];
						liczby[i] = liczby[i + 1];
						liczby[i + 1] = ltym;

						Rysuj(liczby);
					}
					i++;

					setTimeout(pi, czas);
				}
				else
				{
					j++;
					setTimeout(pj, czas);
				}
			}
			pi();

		}
		else
		{
			//console.log(liczby);
			//return liczby;
			return;
		}
	}
	pj();
}

function SortujB2()
{
	var j = liczby.length - 1;
	function p1()
	{
		if (j >= 1)
		{
			var i = 0;
			var p = 1;

			function p2()
			{
				if (i <= j)
				{
					if (liczby[i] > liczby[i + 1])
					{
						var ltym = liczby[i];
						liczby[i] = liczby[i + 1];
						liczby[i + 1] = ltym;

						Rysuj(liczby);

						p = 0;
					}
					i++;
					setTimeout(p2, czas);
				}
				else
				{
					if(p == 1)
					{
						return;
					}
					else
					{
						j++;
						setTimeout(p1, czas);
					}

				}
			}
			p2();

		}
		else
		{
			console.log("Koniec");
			return;
		}
	}
	p1();
}

function SortujW()
{
	var j = 0;

	function p1()
	{
		if (j < liczby.length)
		{
			var p_min = j;
			var i = j + 1;

			function p2()
			{
				if (i <= liczby.length)
				{
					if(liczby[i] < liczby[p_min])
					{
						p_min = i;
					}
					i++;

					setTimeout(p2, czas);
				}
				else
				{
					var ltym = liczby[j];
					liczby[j] = liczby[p_min];
					liczby[p_min] = ltym;

					Rysuj(liczby);

					j++;
					
					setTimeout(p1, czas);
				}
			}
			p2();
		}
		else
		{
			return;
		}
	}
	p1();
}

function SortujWS()
{
	var j = liczby.length - 1;
	console.log("j = " + j);

	function p1()
	{
		if (j >= 1)
		{
			var x = liczby[j];
			var i = j + 1;

			function p2()
			{
				if (i <= liczby.length)
				{
					if (x <= liczby[j])
					{

						console.log(liczby[i - 1] + " : " + x);

						liczby[i - 1] = x;
						Rysuj(liczby);
						j--;
						setTimeout(p1, czas);
					}
					else
					{
						liczby[i - 1] = liczby[i];
						Rysuj(liczby);
						i++;
						setTimeout(p2, czas);
					}
				}
				else
				{
					liczby[i - 1] = x;
					Rysuj(liczby);
					j--;
					setTimeout(p1, czas);
				}
			}
			p2();
		}
		else
		{
			console.log("j = " + j);
			return;
		}
	}
	p1();
}

Losuj(50);
//Sortuj();