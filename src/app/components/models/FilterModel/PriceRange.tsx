import React from "react";
import FilterItemContainer from "./FilterItemContainer";
import { Input } from "../../input/Input";
import { RegisterOptions, FieldValues, UseFormRegisterReturn, useForm } from "react-hook-form";

function PriceRange() {

  const { register, formState: { errors } } = useForm();

  return (
    <FilterItemContainer
      header={"Price range"}
      subheader="The avg nightly price is 7185"
    >
      <div className="
            flex
            flex-col
            w-full
            justify-start
        ">
        <div className='
              flex
              flex-row
              w-full
              justify-between
              items-center
            '>
          <Input
            id={"minimum"}
            label={"Minimum"}
            register={register}
            errors={errors} />
          <div
            className="
              w-8
              h-[2px]
              bg-slate-300
            "
          ></div>
          <Input
            id={"max"}
            label={"Maximum"}
            register={register}
            errors={errors} />
        </div>
      </div>
    </FilterItemContainer>
  );
}

export default PriceRange;
