package net.javaguides.emsbackend;

public class Camera {
    private int id;
    private String CameraIp;
    private String CamName;
    private String Direction;
    private String Password;
    private String Output;
    private String Tailgaiting;


    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id=id;
    }
    public String getCameraIp(){
        return CameraIp;
    }
    public void setCameraIp(String CameraIp){
        this.CameraIp=CameraIp;
    }
    public String getCamName(){
        return CamName;
    }
    public void setCamName(String CamName){
        this.CamName=CamName;
    }
    public String getPassword(){
        return Password;
    }
    public void setPassword(String Password){
        this.Password=Password;
    }

    public String getOutput(){
        return Output;
    }
    public void setOutput(String Output){
        this.Output=Output;
    }

    public String getTailgaiting(){
        return Tailgaiting;
    }
    public void setTailgaiting(String Tailgaiting){
        this.Tailgaiting=Tailgaiting;
    }

    @Override
    public String toString(){
        return "Camera [id ="+id+", CameraIp="+CameraIp+",CamName="+CamName+", Password= "+Password+", Output="+Output+", Tailgaiting="+Tailgaiting+"]";
    }
}
