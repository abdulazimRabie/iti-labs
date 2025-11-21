#include <iostream>
#include "Classes/VideoLesson.h"
#include "Classes/Article.h"
#include "Classes/Quiz.h"
#include "Classes/Course.h"
using namespace std;

// TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
int main() {

    // Aggregation : passing pointer to course, this means that material is independent
    // VideoLesson *vl = new VideoLesson(300, "VideoLesson Of Course", 20);
    // Article *article = new Article ("Article's Title", 287, 4);
    // Quiz *quiz = new Quiz("Quiz's Title Ya ged3aaaaaan", 90, 30);

    Course c;

    c.addMaterial(new VideoLesson(300, "VideoLesson Of Course", 20));
    c.addMaterial(new Article ("Article's Title", 287, 4));
    c.addMaterial(new Quiz("Quiz's Title Ya ged3aaaaaan", 90, 30));

    c.showContent();

    // cout << vl.displayInfo() << endl;
    // cout << article.displayInfo() << endl;
    // cout << quiz.displayInfo() << endl;

    return 0;

    // TIP See CLion help at <a href="https://www.jetbrains.com/help/clion/">jetbrains.com/help/clion/</a>. Also, you can try interactive lessons for CLion by selecting 'Help | Learn IDE Features' from the main menu.
}