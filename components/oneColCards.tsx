import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

export default function CardListColumn(props: any) {
  return (
    <div className="justify-center width-3/6">
      {props.cardItems.map((c: any) => (
        <Link className="flex px-2 py-2 min-w-full " href={c.link} key={c.name}>
          <Card
            className="min-w-full data-[hover=true]:opacity-70"
            isPressable
            isHoverable={true}
          >
            <CardHeader className="flex min-h-30 text-center">
              {c.name}
            </CardHeader>
            <Divider />
            <CardBody className="text-sm">
              <p>{c.description}</p>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
}
