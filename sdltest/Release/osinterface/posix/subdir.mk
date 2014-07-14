################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../osinterface/posix/PPPath_POSIX.cpp \
../osinterface/posix/PPSystem_POSIX.cpp 

OBJS += \
./osinterface/posix/PPPath_POSIX.o \
./osinterface/posix/PPSystem_POSIX.o 

CPP_DEPS += \
./osinterface/posix/PPPath_POSIX.d \
./osinterface/posix/PPSystem_POSIX.d 


# Each subdirectory must supply rules for building sources it contributes
osinterface/posix/%.o: ../osinterface/posix/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O3 -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


