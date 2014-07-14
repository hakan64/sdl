################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../osinterface/sdl/PPMessageBox_SDL.cpp \
../osinterface/sdl/PPOpenPanel_SDL.cpp \
../osinterface/sdl/PPQuitSaveAlert_SDL.cpp \
../osinterface/sdl/PPSavePanel_SDL.cpp \
../osinterface/sdl/SDL_ModalLoop.cpp 

OBJS += \
./osinterface/sdl/PPMessageBox_SDL.o \
./osinterface/sdl/PPOpenPanel_SDL.o \
./osinterface/sdl/PPQuitSaveAlert_SDL.o \
./osinterface/sdl/PPSavePanel_SDL.o \
./osinterface/sdl/SDL_ModalLoop.o 

CPP_DEPS += \
./osinterface/sdl/PPMessageBox_SDL.d \
./osinterface/sdl/PPOpenPanel_SDL.d \
./osinterface/sdl/PPQuitSaveAlert_SDL.d \
./osinterface/sdl/PPSavePanel_SDL.d \
./osinterface/sdl/SDL_ModalLoop.d 


# Each subdirectory must supply rules for building sources it contributes
osinterface/sdl/%.o: ../osinterface/sdl/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


