You can clone this repository and build an image from the Dockerfile.
1 - In your terminal run the command: 

docker build -t my-container . 
Obs.: instead of "my-container", you can name the container as you like.

Now you may have an image build from chuanwen/cowsay.
2 - To run the container you just build, run the command:

docker run my-container

3 - To make the cow say any phrase of your choice, you can write anything after the container name:

docker run my-container hello world!

4 - If you would like to see the animals available, run the command:

docker run my-container -l

5 - If you would like to make another character or animal say any phrase of you choice, it's just as the step 3, instead you will have to put it's name before the phrase:

docker run my-container -f gnu hello world!
