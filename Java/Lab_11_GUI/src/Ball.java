import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.ImageIcon;

public class Ball extends JFrame implements Runnable{

    Thread th;

    int xStep = 5;
    int yStep = 5;

    public void invertXStep(){this.xStep*=-1;}
    public void invertYStep(){this.yStep*=-1;}

    ImageIcon image = new ImageIcon("ball.png");
    JLabel ballLabel = new JLabel(image);

    public int[] bounds = {1000,500};

    public Ball(){
        this.setTitle("Ball Kicking");

        ballLabel.setHorizontalAlignment(JLabel.CENTER);

        ballLabel.setBounds(0, 0, 50, 50);
        this.add(ballLabel);
        this.setLayout(null);




        th = new Thread(this);
        th.start();
    }

    public static void main(String[] args){
        Ball app = new Ball();
        app.setBounds(50,50,app.bounds[0],app.bounds[1]);
        app.setVisible(true);

    }

    @Override
    public void run(){
        while(true){
            int x = ballLabel.getX();
            int y = ballLabel.getY();


            int ballWidth = ballLabel.getWidth();
            int ballHeight = ballLabel.getHeight();


            x += xStep;
            y += yStep;

            System.out.print("(" + x + ", " + y + ")");
            System.out.print(":::");
            System.out.println("(" + this.getWidth() + ", " + this.getHeight() + ")");


            if (x >= (this.getWidth()) - 50) {
                invertXStep();
            }

            if (x <= 0) {
                invertXStep();
            }

            if (y >= (this.getHeight()) - 100) {
                invertYStep();

            }

            if (y <= 0) {
                invertYStep();
            }

            ballLabel.setLocation(x, y);

            try {
                Thread.sleep(10);
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }

}