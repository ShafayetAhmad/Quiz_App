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
            <View style={styles.quizThumbnail}></View>
            <View style={styles.quizDetails}>
              <Text style={styles.quickName}>UI UX Design</Text>
              <Text style={styles.subjectName}>10 Questions</Text>
              <Text style={styles.subjectName}>1 hour 15 min</Text>
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
          <View style={styles.secondQuizContainer}>
            <View style={styles.quizThumbnail}></View>
            <View style={styles.quizDetails}>
              <Text style={styles.quickName}>Graphic Design</Text>
              <Text style={styles.subjectName}>10 Questions</Text>
              <Text style={styles.subjectName}>1 hour 15 min</Text>
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
          <View>
            <Text
              style={{
                color: "black",
                fontSize: 24,
                fontWeight: "bold",
                marginVertical: 20,
                marginHorizontal: 20,
              }}
            >
              Continue Quiz
            </Text>
            <View
              style={{
                flexDirection: "row",
                borderRadius: 5,
                height: 100,
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginTop: 20,
                fontWeight: 300,
                paddingHorizontal: 15,
              }}
            >
              <View
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: "#c4c4c4",
                  borderRadius: 10,
                  alignSelf: "center",
                }}
              ></View>
              <View style={{ height: "100%", width: "70%" }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View style={styles.quizDetails}>
                    <Text style={styles.quickName}>3D Animation</Text>
                    <Text style={styles.subjectName}>8/10 Question</Text>
                    <Text style={styles.subjectName}>35 min</Text>
                  </View>
                  <View
                    style={{
                      height: "80%",
                      paddingTop: 10,
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <FontAwesome5
                        name="trash-alt"
                        style={{
                          color: "#c0c0c0",
                          fontSize: 20,
                          marginHorizontal: 10,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <Pressable>
                  <View
                    style={{
                      height: 30,
                      width: 240,
                      backgroundColor: "black",
                      alignSelf: "center",
                      borderRadius: 5,
                      marginTop: 10,
                      alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Continue Quiz
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 60,
              marginHorizontal: 100,
              backgroundColor: "#366edd",
              width: "90%",
              borderRadius: 5,
              height: 45,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
              Start Quiz
            </Text>
          </View>
        </View>
      </View>
    </BG_Wrapper>
  );
};

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
  },
  secondQuizContainer: {
    flexDirection: "row",
    borderRadius: 5,
    height: 100,
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 20,
    fontWeight: 300,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },

  quizThumbnail: {
    width: 80,
    height: 80,
    backgroundColor: "#c4c4c4",
    borderRadius: 5,
    alignSelf: "center",
  },
  quizDetails: {
    height: 75,
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "center",
    marginLeft: 15,
    alignItems: "flex-start",
  },
  quickName: {
    color: "#1f51ff",
    fontWeight: "600",
  },
  continueQuizThumbnail: {
    width: 100,
    height: 100,
    backgroundColor: "#c4c4c4",
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default Quiz_Lists;
