################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../Button.cpp \
../CheckBox.cpp \
../Container.cpp \
../ContextMenu.cpp \
../Control.cpp \
../DialogBase.cpp \
../DialogFileSelector.cpp \
../Dictionary.cpp \
../DictionaryKey.cpp \
../Event.cpp \
../Font.cpp \
../Graphics_15BIT.cpp \
../Graphics_16BIT.cpp \
../Graphics_24bpp_generic.cpp \
../Graphics_32bpp_generic.cpp \
../Graphics_ARGB32.cpp \
../Graphics_BGR24.cpp \
../Graphics_BGR24_SLOW.cpp \
../Graphics_OGL.cpp \
../KeyboardBindingHandler.cpp \
../ListBox.cpp \
../ListBoxFileBrowser.cpp \
../Menu.cpp \
../MessageBoxContainer.cpp \
../PPUIConfig.cpp \
../RadioGroup.cpp \
../SDL_KeyTranslation.cpp \
../Screen.cpp \
../Scrollbar.cpp \
../Seperator.cpp \
../Slider.cpp \
../StaticText.cpp \
../Tools.cpp \
../TransparentContainer.cpp \
../main.cpp 

OBJS += \
./Button.o \
./CheckBox.o \
./Container.o \
./ContextMenu.o \
./Control.o \
./DialogBase.o \
./DialogFileSelector.o \
./Dictionary.o \
./DictionaryKey.o \
./Event.o \
./Font.o \
./Graphics_15BIT.o \
./Graphics_16BIT.o \
./Graphics_24bpp_generic.o \
./Graphics_32bpp_generic.o \
./Graphics_ARGB32.o \
./Graphics_BGR24.o \
./Graphics_BGR24_SLOW.o \
./Graphics_OGL.o \
./KeyboardBindingHandler.o \
./ListBox.o \
./ListBoxFileBrowser.o \
./Menu.o \
./MessageBoxContainer.o \
./PPUIConfig.o \
./RadioGroup.o \
./SDL_KeyTranslation.o \
./Screen.o \
./Scrollbar.o \
./Seperator.o \
./Slider.o \
./StaticText.o \
./Tools.o \
./TransparentContainer.o \
./main.o 

CPP_DEPS += \
./Button.d \
./CheckBox.d \
./Container.d \
./ContextMenu.d \
./Control.d \
./DialogBase.d \
./DialogFileSelector.d \
./Dictionary.d \
./DictionaryKey.d \
./Event.d \
./Font.d \
./Graphics_15BIT.d \
./Graphics_16BIT.d \
./Graphics_24bpp_generic.d \
./Graphics_32bpp_generic.d \
./Graphics_ARGB32.d \
./Graphics_BGR24.d \
./Graphics_BGR24_SLOW.d \
./Graphics_OGL.d \
./KeyboardBindingHandler.d \
./ListBox.d \
./ListBoxFileBrowser.d \
./Menu.d \
./MessageBoxContainer.d \
./PPUIConfig.d \
./RadioGroup.d \
./SDL_KeyTranslation.d \
./Screen.d \
./Scrollbar.d \
./Seperator.d \
./Slider.d \
./StaticText.d \
./Tools.d \
./TransparentContainer.d \
./main.d 


# Each subdirectory must supply rules for building sources it contributes
%.o: ../%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O3 -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


