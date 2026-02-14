import { AnimatePresence, MotiView } from "moti";
import React, { useState } from "react";
import { Modal, View } from "react-native";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import MainScreen from "../screens/MainScreen";
import { CustomSplashScreen } from "../screens/SplashScreen";
import { AuthModalState } from "../types/navigation";

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState<boolean>(true);
  const [activeModal, setActiveModal] = useState<AuthModalState>(null);

  return (
    <View className="flex-1 bg-background dark:bg-dark-bg">
      <AnimatePresence>
        {isSplashVisible && (
          <MotiView
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ type: "timing", duration: 500 }}
            className="absolute inset-0 z-50"
          >
            <CustomSplashScreen onComplete={() => setSplashVisible(false)} />
          </MotiView>
        )}
      </AnimatePresence>

      {!isSplashVisible && (
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 400 }}
          className="flex-1"
        >
          <MainScreen onNavigate={(screen) => setActiveModal(screen)} />
        </MotiView>
      )}

      <Modal
        visible={activeModal !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setActiveModal(null)}
      >
        {activeModal === "login" && (
          <LoginScreen
            onClose={() => setActiveModal(null)}
            onSwitch={() => setActiveModal("register")}
          />
        )}

        {activeModal === "register" && (
          <RegisterScreen
            onClose={() => setActiveModal(null)}
            onSwitch={() => setActiveModal("register")}
          />
        )}
      </Modal>
    </View>
  );
}
