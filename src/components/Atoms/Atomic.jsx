function Button({cls,content,cls2,cls3})
{
    return(
        <a href="" style={{ textDecoration: "none" }} className={cls} >
        <div className={cls2}>
          <i className={cls3} style={{ marginRight: "5px", color: "#81c408" }}></i>
          {content}
</div>
</a>
    )

}

export{Button}