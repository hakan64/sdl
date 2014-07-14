#include <SDL/SDL.h>
#include "FXAbstract.h"
#include "Fire.h"
#include "Starfield.h"
#include "TwisterFX.h"
#include "Twister.h"
#include "TCBSplineTest.h"
#define WIDTH 300
#define HEIGHT 300
#define BPP 24
SDL_Surface* SetVideoMode()
{
	SDL_Surface* scr;
	if ((scr = SDL_SetVideoMode(WIDTH, HEIGHT, BPP, SDL_SWSURFACE | SDL_DOUBLEBUF))
			== NULL) {
		printf("SetVideoMode Error!");
		return NULL;
	}
	return scr;
}
pp_uint32 calculateTime()
{
	static pp_uint32 lastTime = 0;
	pp_uint32 currentTime = SDL_GetTicks();
	pp_uint32 dTime;
	if (lastTime)
		dTime = currentTime - lastTime;
	else
		dTime = 40;

	lastTime = currentTime;

	return dTime;
}
int main() {
	class FXAbstract *fx;
	//FXAbstract *fx;
	//FXInterface *fx;
	//pp_uint8 *vscreen;
	SDL_Surface  *screen;


	screen = SetVideoMode();

	fx = new Fire(WIDTH, HEIGHT);
	//fx = new Starfield(WIDTH,HEIGHT);
	//fx = new Twister(WIDTH,HEIGHT);
	//vscreen = new pp_uint8[WIDTH * HEIGHT * 3];
	SDL_Event event;

	pp_uint8* screenbuf = (pp_uint8*)screen->pixels;
	while (SDL_PollEvent(&event) >= 0) {
		switch (event.type) {

		case SDL_QUIT: {
			printf("Quit requested, quitting.\n");
			exit(0);
		}
			break;
		}

		SDL_LockSurface(screen);
		//fx->render((unsigned short*)screenbuf,WIDTH*2);
		fx->render(screenbuf);
		//fx->render(vscreen);
		//memcpy(screenbuf,vscreen,WIDTH * HEIGHT * 3);
		SDL_UnlockSurface(screen);

		fx->update(calculateTime() << 9);


		/*for(int i=0;i<WIDTH * HEIGHT * 3;i+=3)
		{
			screenbuf[i] = vscreen[i+2];
			screenbuf[i+1] = vscreen[i+1];
			screenbuf[i+2] = vscreen[i];

		}*/
		//SDL_Delay(50);
		SDL_Flip(screen);
	}
	return 0;
}
