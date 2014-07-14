################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../sdl/DisplayDeviceFB_SDL.cpp \
../sdl/DisplayDeviceOGL_SDL.cpp \
../sdl/DisplayDevice_SDL.cpp 

OBJS += \
./sdl/DisplayDeviceFB_SDL.o \
./sdl/DisplayDeviceOGL_SDL.o \
./sdl/DisplayDevice_SDL.o 

CPP_DEPS += \
./sdl/DisplayDeviceFB_SDL.d \
./sdl/DisplayDeviceOGL_SDL.d \
./sdl/DisplayDevice_SDL.d 


# Each subdirectory must supply rules for building sources it contributes
sdl/%.o: ../sdl/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


