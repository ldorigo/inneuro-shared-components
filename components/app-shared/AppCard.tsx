import Link from "next/link";
import type { AppMetadata } from "../../../types/app";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { cn } from "../../../lib/utils";

export function AppCard(props: AppMetadata) {
  const { id, name, description, icon, path } = props;

  return (
    <Link href={path} className="block">
      <Card
        className={cn(
          "transition-colors hover:border-primary/50 hover:bg-muted/50"
        )}
      >
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            <CardTitle>{name}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
