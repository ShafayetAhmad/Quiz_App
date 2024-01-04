import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import BG_Wrapper from "../../Components/BG_Wrapper/BG_Wrapper";
import { FontAwesome5 } from "@expo/vector-icons";

const Quiz_Lists = () => {
  const handleMenuButtonPress = () => {
    console.log("handle menu button press");
  };
  return (
    <BG_Wrapper>
      <View>
        <View style={styles.navbarStyles}>
          <Pressable onPress={handleMenuButtonPress}>
            <FontAwesome5 name="bars" style={styles.icon} />
          </Pressable>
          <View>
            <Image
              style={styles.proPic}
              source={require("../../../assets/grey-person-icon.webp")}
            />
          </View>
        </View>
        <View>
          <Text style={styles.greetingText}>Hello, James</Text>
          <Text style={styles.introText}>Let's test your knowledge</Text>
        </View>
        <View style={styles.searchContainer}>
          <FontAwesome5 name="search" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="grey"
          />
          <FontAwesome5 name="arrows-alt" style={styles.searchIcon} />
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            marginTop: 20,
          }}
        >
          <View style={styles.horizontalBar}></View>
        </View>
      </View>
    </BG_Wrapper>
  );
};

export default Quiz_Lists;

const styles = StyleSheet.create({
  navbarStyles: {
    marginTop: 50,
    marginHorizontal: 30,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: "white",
    fontSize: 20,
  },
  textStyles: {
    color: "white",
    fontSize: 40,
  },
  greetingText: {
    fontSize: 14,
    color: "white",
    fontWeight: "300",
    marginLeft: 30,
    marginTop: 20,
  },
  introText: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
    marginLeft: 30,
    marginTop: 10,
  },
  proPic: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    marginHorizontal: 30,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
    color: "#1F51FF",
    fontWeight: "300",
  },
  searchInput: {
    flex: 1,
    height: 35,
    fontSize: 14,
    color: "black",
    paddingHorizontal: 10,
  },
  horizontalBar: {
    backgroundColor: "#1F51FF",
    height: 4,
    width: 70,
    alignSelf: "center",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 20,
  },
});
