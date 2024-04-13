import { Button, Empty } from "keep-react";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center ms-auto h-[80vh] md:h-[90vh]">
        <Empty className="max-w-2xl">
          <Empty.Image>
            <img
              src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
              height={234}
              width={350}
              alt="404"
            />
          </Empty.Image>
          <Empty.Title>404 Not Found</Empty.Title>
          <Empty.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </Empty.Description>
          <Link to="/">
            <Button variant="outline" className="text-black" href="/">
              Go to home
            </Button>
          </Link>
        </Empty>
      </div>
    </Layout>
   
  );
};

export default NotFound;
