import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "secondaryC") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondaryC);;
  } else if (theme === "primary") {
    buttonStyles.push(styles.buttonPrimary);
  } else if (theme === "accent") {
  buttonStyles.push(styles.buttonAccent);
  textStyles.push(styles.textAccent);
}

  

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#222",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  textSecondary: {
    color: "#20FF10",
  },
  textSecondaryC: {
    color: "#FF7070",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonPrimary: {
    backgroundColor: "#208810",
  },
  textAccent: {
    color: "#20FF10",
  },

});