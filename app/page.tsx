"use client";

import { Button } from "@nextui-org/button";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { stringify } from "querystring";

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mode: "time",
      line: "all",
    },
  });

  return (
    <div>
      <div className="pb-10">
        <h1 className="text-5xl pb-10">MRT Abbreviation Game</h1>
      </div>
      <div className="text-left">
        <form
          onSubmit={handleSubmit((data) =>
            router.push(`${data.line}_${data.mode}`)
          )}
        >
          <RadioGroup
            id="gameModeRadio"
            label="Select your game mode:"
            isRequired
            defaultValue="time"
            {...register("mode")}
          >
            <Radio
              value="time"
              description="Time attack, 90 second to guess as many stations as you can."
              {...register("mode")}
            >
              Time Attack - 90 second
            </Radio>
            <Radio
              value="lives"
              description="Accuracy challenge, you have 5 lives, try to identify all stations in a line!"
              {...register("mode")}
            >
              100% - 3 Lives
            </Radio>
          </RadioGroup>
          <br />
          <RadioGroup
            id="gameLineRadio"
            label="Select the MRT Line:"
            defaultValue="all"
            isRequired
            {...register("line")}
          >
            <Radio id="all" value="all" color="default" {...register("line")}>
              All Lines
            </Radio>
            <Radio id="nsl" value="nsl" color="danger" {...register("line")}>
              North-South Line (NSL)
            </Radio>
            <Radio id="ewl" value="ewl" color="success" {...register("line")}>
              East-West Line (EWL)
            </Radio>
            <Radio id="nel" value="nel" color="secondary" {...register("line")}>
              North East Line (NEL)
            </Radio>
            <Radio id="ctl" value="ccl" color="warning" {...register("line")}>
              Circle Line (CCL)
            </Radio>
            <Radio id="dtl" value="dtl" color="primary" {...register("line")}>
              Downtown Line (DTL)
            </Radio>
            <Radio id="tel" value="tel" color="warning" {...register("line")}>
              Thomson-East Coast Line (TEL)
            </Radio>
          </RadioGroup>

          <br />
          <Button type="submit">Play</Button>
        </form>
      </div>
    </div>
  );
}

/*
return (
    <div className="pb-10">
      <h1 className="text-5xl pb-10">MRT Abbreviation Game</h1>

      <CardListColumn cardItems={gameModes} />
    </div>
  );
*/
