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
            <Image style={styles.profileImage} />
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
        <View style={styles.whiteBG}>
          <View style={styles.horizontalBar}></View>
          <View style={styles.subjectsContainer}>
            <Text style={styles.subjectName}>Popular</Text>
            <Text style={styles.subjectName}>Science</Text>
            <Text style={styles.subjectName}>Mathematics</Text>
            <Text style={styles.subjectName}>Computer</Text>
          </View>
          <View style={styles.quizContainer}>
            <View style={styles.quizContainer.quizThumbnail}></View>
            <View style={styles.quizContainer.quizDetails}>
              <Text style={styles.quizContainer.quizDetails.quickName}>
                UI UX Design
              </Text>
              <Text>10 Questions</Text>
              <Text>1 hour 15 min</Text>
            </View>
            <View
              style={{
                height: "100%",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <FontAwesome5 name="star" style={styles.ratingIcon} />
              <Text
                style={{
                  textAlign: "center",
                }}
              >
                4.8
              </Text>
            </View>
          </View>
          <View style={styles.quizContainer}>
            <View style={styles.quizContainer.quizThumbnail}></View>
            <View style={styles.quizContainer.quizDetails}>
              <Text style={styles.quizContainer.quizDetails.quickName}>
                Graphic Design
              </Text>
              <Text>10 Questions</Text>
              <Text>1 hour 15 min</Text>
            </View>
            <View
              style={{
                height: "100%",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <FontAwesome5 name="star" style={styles.ratingIcon} />
              <Text
                style={{
                  textAlign: "center",
                }}
              >
                4.8
              </Text>
            </View>
          </View>
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
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#c4c4c4",
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
  ratingIcon: {
    color: "#dc9d00",
    fontSize: 20,
  },
  searchInput: {
    flex: 1,
    height: 35,
    fontSize: 14,
    color: "black",
    paddingHorizontal: 10,
  },
  whiteBG: {
    backgroundColor: "white",
    height: "100%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 20,
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
  subjectsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 20,
    fontWeight: 300,
  },
  subjectName: {
    color: "#c0c0c0c0",
    fontWeight: "600",
  },
  quizContainer: {
    flexDirection: "row",
    borderColor: "#1f51ff",
    borderWidth: 2,
    borderRadius: 5,
    height: 100,
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 20,
    fontWeight: 300,
    paddingHorizontal: 15,

    quizThumbnail: {
      width: 80,
      height: 80,
      backgroundColor: "#c4c4c4",
      borderRadius: 10,
      alignSelf: "center",
    },
    quizDetails: {
      height: 75,
      flex: 1,
      justifyContent: "space-between",
      alignSelf: "center",
      marginLeft: 15,
      alignItems: "flex-start",
      quickName: {
        color: "#1f51ff",
        fontWeight: "600",
      },
    },
  },
});
