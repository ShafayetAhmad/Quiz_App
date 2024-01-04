const QuizDetailsAndRating = ({ name, questionCount, duration }) => {
  return (
    <View style={styles.quizDetails}>
      <Text style={styles.quickName}>{name}</Text>
      <Text style={styles.subjectName}>{questionCount}</Text>
      <Text style={styles.subjectName}>{duration}</Text>
      <View
        style={{ height: "100%", alignItems: "center", flexDirection: "row" }}
      >
        <FontAwesome5 name="star" style={styles.ratingIcon} />
        <Text style={{ textAlign: "center" }}>4.8</Text>
      </View>
    </View>
  );
};
