################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../Camera.cpp \
../Filter.cpp \
../Fire.cpp \
../Math3d.cpp \
../ParticleBlobs.cpp \
../ParticleEmitter.cpp \
../ParticleFX.cpp \
../ParticleFun.cpp \
../ParticleScene.cpp \
../Starfield.cpp \
../TCBSpline.cpp \
../TCBSplineTest.cpp \
../Texture.cpp \
../TexturedGrid.cpp \
../TexturedPlane.cpp \
../Twister.cpp \
../TwisterFX.cpp \
../fpmath.cpp \
../main.cpp 

OBJS += \
./Camera.o \
./Filter.o \
./Fire.o \
./Math3d.o \
./ParticleBlobs.o \
./ParticleEmitter.o \
./ParticleFX.o \
./ParticleFun.o \
./ParticleScene.o \
./Starfield.o \
./TCBSpline.o \
./TCBSplineTest.o \
./Texture.o \
./TexturedGrid.o \
./TexturedPlane.o \
./Twister.o \
./TwisterFX.o \
./fpmath.o \
./main.o 

CPP_DEPS += \
./Camera.d \
./Filter.d \
./Fire.d \
./Math3d.d \
./ParticleBlobs.d \
./ParticleEmitter.d \
./ParticleFX.d \
./ParticleFun.d \
./ParticleScene.d \
./Starfield.d \
./TCBSpline.d \
./TCBSplineTest.d \
./Texture.d \
./TexturedGrid.d \
./TexturedPlane.d \
./Twister.d \
./TwisterFX.d \
./fpmath.d \
./main.d 


# Each subdirectory must supply rules for building sources it contributes
%.o: ../%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


