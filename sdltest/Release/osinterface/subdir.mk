################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../osinterface/PPPathFactory.cpp 

OBJS += \
./osinterface/PPPathFactory.o 

CPP_DEPS += \
./osinterface/PPPathFactory.d 


# Each subdirectory must supply rules for building sources it contributes
osinterface/%.o: ../osinterface/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O3 -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '

